# Nest Js :

        - is for building efficient, scalable node js server side applications
        - supports TS
        - it combined elements of OOPs and FRP (functional relative programming)
        - makes use of robust http server frameworks like experss and can be configured to use Fastify as well

# Monolythic :

        The entire application is built and deployed as one single unit.
        Pros:
        - Easy to Start, because it’s faster and simpler.
        - Easier Debugging
        - Simpler Development
        Cons:
        - Becomes Bulky
        - Hard to Scale Individually
        - Risky Deployments

# Microservices :

        Microservices break the application into multiple small services.
        Pros:
        - Independent Deployment
        - Independent Scaling
        - Team Independence
        - Technology Freedom
        Cons:
        - More Complexity
        - Harder Debugging
        - More Infrastructure

# Decorator?

        A decorator is a special function that can add metadata, modify behavior, or extend functionality of a class, method, property, or parameter.

        Think of it like putting a label/badge or sticker on something.
        it can be applied to class, method, property etc.
        Decorators often don’t change your code directly. They attach metadata.

# Module :

        a class annotated with @Module() decorator
        - “What components belong to the Users feature?”

```ts
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

# Controllers :

        receives and handles req for an app
        - retruns the appropriate response

```ts
@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'All users';
  }
}
```

# Service :

        Service contains the actual business logic.

```ts
@Injectable()
export class UsersService {
  getUsers() {
    return [{ id: 1, name: 'Arun' }];
  }
}
```

# Dependency injection :

        a form of Inversion of Control where dependencies are supplied to a class by an external entity (such as a DI container) rather than being instantiated within the class itself. This promotes loose coupling, testability, and easier maintenance.

# IoC :

        Inversion of Control is a design principle where the responsibility for creating and managing dependencies is transferred from application code to an external container or framework. Dependency Injection is one common implementation of IoC.

# DTO :

        Data transfer object , used to define the shape of data being transferred between parts of an application.

# Pipes :

        A Pipe is a class that runs before a controller method and is used to transform or validate incoming data.

# Passport :

        is an authentication middleware integrated into NestJS through @nestjs/passport. It uses strategies such as Local and JWT to authenticate users. Passport validates credentials or tokens, while NestJS guards use Passport strategies to protect routes and attach authenticated user information to the request object.

# JWT :

        JSON Web Token, A JWT is a compact, signed token used to securely transmit user identity and claims between a client and a server.

