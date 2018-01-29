------------------------------------------------------------------- 以下 是一个基础的 spring boot 项目结构 Start------------------------------------------------------
1.What spring boot.
	Spring引导倾向于约定优于配置，它的设计目的是让您尽可能快地启动和运行。
	Spring boot 致力于简洁，让开发者写更少的配置，程序能够更快的运行和启动。它是下一代javaweb框架，并且它是spring cloud(微服务)的基础。

2. 创建项目
	Application类，程序的入口。
	resource 文件夹下，application.yml文件。程序的配置文件。

	@RestController     //等同于同时加上了@Controller和@ResponseBody
	
	spring boot 内置servlet容器，所以不需要类似传统的方式，先部署到容器再启动容器。

3. 属性配置
	在appliction.yml文件添加属性：
		server:
		  port: 8080
		  context-path: /springboot
		girl:
		  name: B
		  age: 18
		  content: content:${name},age:${age}

	在java文件中，获取name属性，如下：
		@Value("${name}")
	 	private String name;

 	也可以通过ConfigurationProperties注解，将属性注入到bean中，通过Component注解将bean注解到spring容器中：
 		@ConfigurationProperties(prefix="girl")
		@Component
		public class GirlProperties {

		    private String name;
		    private int age;

		    public String getName() {
		        return name;
		    }

		    public void setName(String name) {
		        this.name = name;
		    }

		    public int getAge() {
		        return age;
		    }

		    public void setAge(int age) {
		        this.age = age;
		    }
		}

------------------------------------------------------------------- 以上 是一个基础的 spring boot 项目结构 End------------------------------------------------------