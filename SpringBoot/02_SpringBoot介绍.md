## SpringBoot介绍

Spring Boot是一个用于构建Spring应用程序的快速开发框架，它是基于Spring Framework的基础上开发的。Spring Boot旨在简化Spring应用程序的开发和部署，提供了自动配置、快速开发和无代码生成等特性，可以大大提高开发效率和减少代码量。

Spring Boot具有以下优点：

1. 自动配置：Spring Boot提供了丰富的默认配置，开发者无需进行繁琐的配置即可快速搭建应用程序。
2. 快速开发：Spring Boot通过提供各种Starter依赖，大大简化了应用程序的构建过程，开发者只需要引入所需的依赖即可。
3. 无代码生成：Spring Boot不需要编写任何代码即可生成Web应用程序，只需要使用简单的注解就可以完成开发工作。
4. 易于部署：Spring Boot支持各种云平台，可以轻松地将应用程序部署到云端，减少了服务器管理的负担。
5. 生态丰富：Spring Boot有庞大的社区支持，拥有大量的插件和扩展，可以满足各种开发需求。

总之，Spring Boot是一个高效、简单、快速、易用的开发框架，它能够极大地提高开发者的开发效率和生产力，是目前最流行的Java开发框架之一。

------



### 1. stater

传统的 Spring 项目想要运行，不仅需要导入各种依赖，还要对各种 XML 配置文件进行配置，十分繁琐，但 Spring Boot 项目在创建完成后，即使不编写任何代码，不进行任何配置也能够直接运行，这都要归功于 Spring Boot 的 starter 机制。

Spring Boot 将日常企业应用研发中的各种场景应用到的技术都抽取出来，做成一个个的 starter（启动器），starter 中整合了该场景下各种可能用到的依赖，用户只需要在 Maven 中引入 starter 依赖，SpringBoot 就能自动扫描到要加载的信息并启动相应的默认配置。starter 提供了大量的自动配置，让用户摆脱了处理各种依赖和配置的困扰。所有这些 starter 都遵循着约定成俗的默认配置，并允许用户调整这些配置，即遵循“约定大于配置”的原则。

并不是所有的 starter 都是由 Spring Boot 官方提供的，也有部分 starter 是第三方技术厂商提供的，例如 druid-spring-boot-starter 和 mybatis-spring-boot-starter 等等。当然也存在个别第三方技术，Spring Boot 官方没提供 starter，第三方技术厂商也没有提供 starter。

以 `spring-boot-starter-web` 为例，它能够为提供 Web 开发场景所需要的几乎所有依赖，因此在使用 Spring Boot 开发 Web 项目时，只需要引入该 Starter 即可，而不需要额外导入 Web 服务器和其他的 Web 依赖。
在 pom.xml 中引入 `spring-boot-starter-web`，示例代码如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <!--SpringBoot父项目依赖管理-->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.5</version>
        <relativePath/>
    </parent>
    ....
    <dependencies>
        <!--导入 spring-boot-starter-web-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        ...
    </dependencies>
    ...
</project>
```

查看`spring-boot-starter-web`的内容，可以看到里面都是一些web开发需要用的技术的依赖，并且又引入了其他stater

```xml
<dependencies>
    
    <!--这个starter包含了SpringBoot启动最基本的依赖-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter</artifactId>
      <version>2.7.10</version>
      <scope>compile</scope>
    </dependency>
    
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-json</artifactId>
      <version>2.7.10</version>
      <scope>compile</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-tomcat</artifactId>
      <version>2.7.10</version>
      <scope>compile</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-web</artifactId>
      <version>5.3.26</version>
      <scope>compile</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-webmvc</artifactId>
      <version>5.3.26</version>
      <scope>compile</scope>
    </dependency>
</dependencies>
```

在以上 pom.xml 的配置中，引入依赖 spring-boot-starter-web 时，并没有指明其版本，但查看依赖都具有版本信息，那么这些版本信息是在哪里控制的呢？其实，这些版本信息是由 spring-boot-starter-parent（版本控制中心） 统一控制的。



### 2. parent

spring-boot-starter-parent 是所有 Spring Boot 项目的父级依赖，它被称为 Spring Boot 的版本仲裁中心，可以对项目内的部分常用依赖版本进行统一管理。

每一个springboot版本都对应一个parent版本，每个parent版本中收集的依赖版本不一样。

```xml
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.10</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
```

点开`spring-boot-starter-parent`可以发现其有一个父级依赖 `spring-boot-dependencies

```xml
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-dependencies</artifactId>
    <version>2.7.10</version><!--springboot的版本-->
  </parent>
```

点开`spring-boot-dependencies`可以看到里面收集了一些常用的技术的版本信息、依赖坐标管理和插件管理

```xml
<!--常用依赖版本列表-->
<properties>
    <activemq.version>5.16.6</activemq.version>
    <antlr2.version>2.7.7</antlr2.version>
    <appengine-sdk.version>1.9.98</appengine-sdk.version>
    <artemis.version>2.19.1</artemis.version>
    <aspectj.version>1.9.7</aspectj.version>
    <assertj.version>3.22.0</assertj.version>
    <atomikos.version>4.0.6</atomikos.version>
    ...
 </properties>

<!--依赖坐标管理-->
<dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.apache.activemq</groupId>
        <artifactId>activemq-amqp</artifactId>
        <version>${activemq.version}</version>
      </dependency>
      <dependency>
        <groupId>org.apache.activemq</groupId>
        <artifactId>activemq-blueprint</artifactId>
        <version>${activemq.version}</version>
      </dependency>
      <dependency>
        <groupId>org.apache.activemq</groupId>
        <artifactId>activemq-broker</artifactId>
        <version>${activemq.version}</version>
      </dependency>
        ...
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId> <!--可以看到一些常用的stater也被收集到parent中-->
        <version>2.7.10</version><!--并且指定了版本，这个版本和当前springboot版本一致-->
      </dependency>
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webflux</artifactId>
        <version>2.7.10</version>
      </dependency>
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-websocket</artifactId>
        <version>2.7.10</version>
      </dependency>
        ...
    </dependencies>
</dependencyManagement>

<!--插件管理-->
<build>
    <pluginManagement>
      <plugins>
        <plugin>
          <groupId>org.codehaus.mojo</groupId>
          <artifactId>build-helper-maven-plugin</artifactId>
          <version>${build-helper-maven-plugin.version}</version>
        </plugin>
        <plugin>
          <groupId>org.flywaydb</groupId>
          <artifactId>flyway-maven-plugin</artifactId>
          <version>${flyway.version}</version>
        </plugin>
        <plugin>
          <groupId>pl.project13.maven</groupId>
          <artifactId>git-commit-id-plugin</artifactId>
          <version>${git-commit-id-plugin.version}</version>
        </plugin>
          ...
      </plugins>
    </pluginManagement>
</build>
```

以上配置中，部分元素说明如下：

- dependencyManagement ：负责管理依赖；
- pluginManagement：负责管理插件；
- properties：负责定义依赖或插件的版本号



**starter与parent的区别**

​	starter是一个坐标中定了若干个坐标，是用来减少依赖配置的书写量的。

​	parent是定义了很多常用技术的最优依赖版本号，是用来减少依赖冲突的。

**实际开发依赖导入方式**

实际开发中如果需要用什么技术，先去找有没有这个技术对应的starter

- 如果有对应的starter，直接导入starter，而且无需指定版本，版本由parent提供。
- 如果没有对应的starter，手写坐标即可。



### 3. 引导类

使用`@SpringBootApplication`标记的类表示此类是一个引导类，或者说是配置类，是SpringBoot程序的入口。

@SpringBootApplication注解内导入了@ComponentScan，会扫描当前类所在的包及子包下的组件类，并将其加载到Spring容器中。

```java
@SpringBootApplication
public class QuickStartApplication {
    public static void main(String[] args) {
        //SpringApplication.run(QuickStartApplication.class, args);//这句代码其实就是创建了spring容器
        ConfigurableApplicationContext content = SpringApplication.run(QuickStartApplication.class, args);
        QuickStartApplication bean = content.getBean(QuickStartApplication.class);
        System.out.println(bean);
    }
}
```



### 4. 内嵌服务器

web程序需要使用web服务器才能运行，然而我们没有配置tomcat服务器也能启动web程序。因为SpringBoot在程序的内部内嵌了tomcat服务器，它被包含在`spring-boot-starter-web`里面。

```xml
<dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-tomcat</artifactId>	<!--这里面又包含了与tomcat有关的依赖-->
      <version>2.7.10</version>
      <scope>compile</scope>
</dependency>
```

因为万事万物皆对象，SpringBoot把tomcat的实例交由Spring容器管理，在启动引导类的时候会启动内嵌的tomcat服务器。

tomcat服务器是SpringBoot默认的web服务器，当然我们可以对其进行修改。SpringBoot提供了3款内置的服务器：

- tomcat(默认)：apache出品，粉丝多，应用面广，负载了若干较重的组件

- jetty：更轻量级，负载性能远不及tomcat

- undertow：负载性能勉强跑赢tomcat


```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <exclusions>	
            <exclusion>	<!--exclusion表示需要排除的依赖-->
                <!--将tomcat有关的依赖给排除，导入下面的jetty服务器相关的依赖-->
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-tomcat</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jetty</artifactId>
    </dependency>
</dependencies>
```

