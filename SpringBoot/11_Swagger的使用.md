## Swagger的使用

Swagger是一组开源工具和规范，用于设计、构建、记录和使用 RESTful Web服务。它提供了一种规范化的方式来描述和定义API，以及自动生成交互式文档、客户端代码和服务端存根。

Swagger的核心组件包括：

1. Swagger规范（Swagger Specification）：也称为OpenAPI规范，是一种用于描述API的规范格式。它使用JSON或YAML格式，定义了API的终端点、请求和响应的数据结构、认证机制等。

2. Swagger UI：是一个自动生成交互式API文档的前端工具。它能够读取Swagger规范文件，并生成一个易于浏览和测试API的用户界面。Swagger UI以可视化的方式展示API的终端点、参数、请求示例和响应结果。

3. Swagger Codegen：是一个代码生成工具，根据Swagger规范文件自动生成客户端代码和服务端存根。它支持多种编程语言和框架，可以快速生成与API交互的代码模板，减少手动编写重复代码的工作量。

通过使用Swagger，开发团队可以更好地协作和沟通，减少对API的误解和不一致性。API的设计者可以使用Swagger规范来定义和描述API，开发者可以使用Swagger UI来浏览和测试API，客户端开发者可以使用Swagger Codegen来生成与API交互的代码。这样可以提高开发效率，减少集成问题，同时也方便了API的文档和版本控制。

使用Swagger可以按照以下步骤进行：

1. 添加Swagger依赖：在项目的构建文件（如Maven的pom.xml）中添加Swagger相关的依赖项。通常会包括Swagger核心库和Swagger UI依赖。

2. 配置Swagger：在项目的配置文件中进行Swagger的配置。具体配置方式取决于使用的框架和工具。一般需要指定API的基本信息、扫描API的包路径、认证机制等。

3. 添加Swagger注解：在API的代码中添加Swagger注解来描述API的信息。常用的注解包括`@Api`用于标记API类，`@ApiOperation`用于标记API方法，`@ApiParam`用于标记API参数等。这些注解可以定义API的名称、描述、参数、返回类型等详细信息。

4. 生成Swagger文档：通过运行项目，Swagger会自动生成API文档。可以通过访问Swagger UI界面来查看和测试API。Swagger UI提供了一个交互式的界面，显示API的终端点、参数、请求示例和响应结果。

5. 自定义Swagger文档：根据需要，可以进一步自定义Swagger文档。可以修改Swagger配置，添加额外的信息或注解来增强API的描述性和可读性。还可以通过配置来控制文档的展示样式和格式。

Knife4j是一种基于Swagger构建的API文档在线浏览和调试工具，它提供了一种更加美观、易用且功能强大的方式来展示和管理API文档。Knife4j相对于原始的Swagger UI，提供了更多的自定义配置和扩展功能，使得API文档更加友好和直观。

下面导入Knife4j的依赖：

```Java
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-spring-boot-starter</artifactId>
    <version>3.0.2</version>
</dependency>
```

添加配置类，需要在该配置类上添加两个注解：`@EnableSwagger2` 、`@EnableKnife4j`

```Java
@Configuration
@EnableSwagger2
@EnableKnife4j
public class SwaggerConfig {

    @Bean
    public Docket createRestApi() {
        // 文档类型
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.reggie.controller")) // s
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("瑞吉外卖")
                .version("1.0")
                .description("瑞吉外卖接口文档")
                .build();
    }

}
```

常用注解：

|        **注解**        |                         **说明**                         |
| :--------------------: | :------------------------------------------------------: |
|        **@Api**        |      用在请求的类上，例如Controller，表示对类的说明      |
|     **@ApiModel**      |    用在类上，通常是实体类，表示一个返回响应数据的信息    |
| **@ApiModelProperty**  |               用在属性上，描述响应类的属性               |
|   **@ApiOperation**    |          用在请求的方法上，说明方法的用途、作用          |
| **@ApilmplicitParams** |            用在请求的方法上，表示一组参数说明            |
| **@ApilmplicitParam**  | 用在@ApilmplicitParams注解中，指定一个请求参数的各个方面 |

使用示例：

```Java
**
 * 套餐管理
 */
@RestController
@RequestMapping("/setmeal")
@Slf4j
@Api(tags = "套餐相关接口")
public class SetmealController {


    /**
     * 新增套餐
     */
    @PostMapping
    @ApiOperation(value = "新增套餐接口")
    public R<String> save(@RequestBody SetmealDto setmealDto){
		...
    }

    /**
     * 套餐分页查询
     */
    @GetMapping("/page")
    @ApiOperation(value = "套餐分页查询接口")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "page",value = "页码",required = true),
            @ApiImplicitParam(name = "pageSize",value = "每页记录数",required = true),
            @ApiImplicitParam(name = "name",value = "套餐名称",required = false)
    })
    public R<Page> page(int page,int pageSize,String name){
      	...
    }

    /**
     * 删除套餐
     */
    @DeleteMapping
    @ApiOperation(value = "套餐删除接口")
    public R<String> delete(@RequestParam List<Long> ids){
        ...
    }

    /**
     * 根据条件查询套餐数据
     */
    @GetMapping("/list")
    @ApiOperation(value = "套餐条件查询接口")
    public R<List<Setmeal>> list(Setmeal setmeal){
		...
    }
}
```

