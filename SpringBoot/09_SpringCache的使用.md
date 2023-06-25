## Spring Cache的使用

Spring Cache 是 Spring 框架提供的一种缓存抽象机制，用于简化在应用程序中使用缓存的操作。它通过定义统一的缓存操作接口和注解，使得开发者可以方便地使用缓存来提高应用程序的性能和响应速度。

Spring Cache 的主要特性和概念包括：

1. 缓存注解：Spring Cache 提供了一组注解，包括 `@Cacheable`、`@CachePut`、`@CacheEvict` 等，用于在方法级别上声明缓存的使用。通过在方法上添加这些注解，可以实现方法的结果被缓存、缓存的更新和缓存的清除。
2. 缓存管理器：Spring Cache 支持多个缓存管理器（Cache Manager），例如 EhCache、Redis、Caffeine 等。开发者可以根据需要选择适合的缓存管理器，并配置到 Spring 应用程序中。
3. 缓存操作接口：Spring Cache 提供了统一的缓存操作接口 `Cache`，包含了常见的缓存操作方法，如 `get(key)`、`put(key, value)`、`evict(key)` 等。通过调用缓存操作接口的方法，可以直接操作缓存。
4. 缓存配置：在 Spring 配置文件中，可以配置缓存相关的设置，如缓存的过期时间、缓存的命名空间、缓存的存储位置等。


在 Spring Cache 中，如果没有显式配置缓存管理器，会使用默认的缓存管理器，这些缓存管理器都是在 `spring-context` jar包中。默认情况下，Spring 使用 SimpleCacheManager 作为默认的缓存管理器。SimpleCacheManager 是 Spring 提供的简单的缓存管理器实现，它是基于 ConcurrentHashMap 的简单缓存实现。

要配置自定义的缓存管理器，可以在 Spring 配置文件中添加相关的缓存管理器配置，或者使用注解方式进行配置。



#### @EnableCaching

在启动类上添加@EnableCaching注解

> @EnableCaching 注解会触发 Spring 缓存管理器的自动配置，并创建一个基于代理的切面，拦截带有缓存注解的方法调用。当带有缓存注解的方法被调用时，Spring 会首先检查缓存中是否已存在该方法的结果，如果存在，则直接从缓存中获取结果并返回，避免了方法的重复执行，提升了性能。



@Cacheable、@CachePut 和 @CacheEvict 是 Spring 框架中用于缓存操作的注解，它们可以应用在方法上，用于定义方法的缓存行为。

这些注解中的属性可以使用SpEL表达式来获取值：

1. `#p0` 表示获取方法的第一个形参的值，`#p1` 表示获取方法的第二个形参的值，以此类推。
2. `#root.args[0]` 也是获取方法的第一个形参的值，`#root.args[1]` 表示获取方法的第二个形参的值，以此类推。
3. `#参数名`，表示获取指定参数的值。
4. `#result` ，表示获取返回值，也可以用 `#返回值` 比如 `#user`，表示获取返回值user对象。



#### @Cacheable

> 该注解标记的方法会在执行前检查缓存中是否存在所需的数据。如果缓存中存在数据，则直接返回缓存的结果；如果缓存中不存在数据，则执行方法体，并将方法的返回值存储到缓存中。

@Cacheable 注解中的属性：

- `cacheNames`：指定一个或多个缓存的名称，用于确定数据存储在哪些缓存中。

- `value`：与 `cacheNames` 属性相同，用于指定缓存的名称。

- `key`：指定用于缓存键生成的 SpEL 表达式，根据方法的参数动态生成缓存键。

- `keyGenerator`：指定用于生成缓存键的自定义 KeyGenerator 类。

- `condition`：指定一个 SpEL 表达式，当满足条件时才会进行缓存操作。

- `unless`：指定一个 SpEL 表达式，当满足条件时不进行缓存操作。

```Java
	@Cacheable(value = "userCache",key = "#user.id + '_' + #user.name")
    @GetMapping("/list")
    public List<User> list(User user){
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(user.getId() != null,User::getId,user.getId());
        queryWrapper.eq(user.getName() != null,User::getName,user.getName());
        List<User> list = userService.list(queryWrapper);
        return list;
    }
```



#### @CachePut

> 标记一个方法的返回值应该被缓存，与 @Cacheable 不同的是，@CachePut 会每次都执行方法，并将结果存入缓存，适用于更新缓存数据的场景。

@CachePut 注解中的属性：

- `cacheNames`、`value`：同 @Cacheable 属性，用于指定缓存的名称。
- `key`：同 @Cacheable 属性，用于指定缓存键生成的 SpEL 表达式。
- `keyGenerator`：同 @Cacheable 属性，用于生成缓存键的自定义 KeyGenerator 类。

```java
	/**
     * CachePut：将方法返回值放入缓存
     * value：缓存的名称，每个缓存名称下面可以有多个key
     * key：缓存的key
     */
    @CachePut(value = "userCache",key = "#user.id")// #user.id表示用返回值的id属性作为key
    @PostMapping
    public User save(User user){ 
        userService.save(user);
        return user;
    }
```



#### @CacheEvict

> 该注解标记的方法用于从缓存中移除数据。它可以用于删除缓存中的数据或清空整个缓存。

@CacheEvict 注解中的属性：

- `cacheNames`、`value`：同 @Cacheable 属性，用于指定缓存的名称。
- `key`：同 @Cacheable 属性，用于指定缓存键生成的 SpEL 表达式。
- `keyGenerator`：同 @Cacheable 属性，用于生成缓存键的自定义 KeyGenerator 类。
- `allEntries`：指定是否清空所有缓存，默认为 false。
- `beforeInvocation`：指定是否在方法执行前移除缓存，默认为 false。

```java
    /**
     * CacheEvict：清理指定缓存
     * value：缓存的名称，每个缓存名称下面可以有多个key
     * key：缓存的key
     */
    @CacheEvict(value = "userCache",key = "#p0")
    //@CacheEvict(value = "userCache",key = "#root.args[0]")
    //@CacheEvict(value = "userCache",key = "#id")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        userService.removeById(id);
    }
```



#### @Caching

> 用于组合多个缓存注解，可以在同一个方法上同时使用多个缓存注解。

@Caching 注解中的属性：

- `cacheable`：指定 @Cacheable 注解的配置。
- `put`：指定 @CachePut 注解的配置。
- `evict`：指定 @CacheEvict 注解的配置。

```Java
@Caching(cacheable = @Cacheable(cacheNames = "cache1"), put = @CachePut(cacheNames = "cache2"))
public User cachedMethod() {
    // 方法体
}
```



#### **使用Redis作为缓存管理器**

首先先导入相关的坐标：

```xml
<!--spring-boot-starter-cache-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
<!--spring-boot-starter-data-redis-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

配置redis和cache：

```yml
spring:
  data:
    redis:
      port: 6379
      host: 192.168.101.110
      password: 123456
  cache:
    redis:
      time-to-live: 1800000 #设置缓存过期时间
```

```
spring:
  shardingsphere:
    # 配置数据源
    datasource:
      names: master,slave # 数据源的名称，下面配置的数据源要和这里声明的名称对应
      master:
        type: com.alibaba.druid.pool.DruidDataSource
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://192.168.101.110:3306/test?serverTimezone=UTC&useSSL=false&characterEncoding=utf-8
        username: root
        password: 123456
      slave:
        type: com.alibaba.druid.pool.DruidDataSource
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://192.168.101.111:3306/test?serverTimezone=UTC&useSSL=false&characterEncoding=utf-8
        username: root
        password: 123456
    # 读写分离配置
    masterslave:
      load-balance-algorithm-type: round_robin # 负载均衡算法：轮询
      name: dataSource # 最终的数据源名称
      master-data-source-name: master # 主库数据源的名称（上面声明的master，名称自定义不是必须为master）
      slave-data-source-names: slave # 从库数据源名称，多一个从库数据源用逗号隔开
    props:
      # 开启sql显示，默认是false
      sql:
        show: true
  main:
    allow-bean-definition-overriding: true # 允许bean定义覆盖（因为这里有多个数据源，会产生冲突）

mybatis-plus:
  configuration:
    # 在映射实体或者属性时，将数据库中表名和字段名中的下划线去掉，按照驼峰命名法映射
    map-underscore-to-camel-case: true
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
  global-config:
    db-config:
      id-type: ASSIGN_ID
```

