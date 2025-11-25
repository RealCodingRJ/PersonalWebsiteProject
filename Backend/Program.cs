
namespace WebApplication1
{

    public class Type<T>
    {
        public string? Route { get; set; }
        public string? RouteMessage { get; set; }
    }

    public static class Routes
    {
        extension(Type<string> type)
        {
            public string FileNameRoute => $"{type.Route}";
            public string FileNameRouteMessage => $"{type.RouteMessage}";
        }
    }

    public class Program
    {

        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddOpenApi();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseAuthorization();


            var homeRoute = new Type<string>() { Route = "/About", RouteMessage = "Hello From C#" };

            var ContactPage =
                new Type<string>() { Route = "/Contact", RouteMessage = "Contact Page" };

            var classFileRoute =
                    new Type<string>() { Route = "/", RouteMessage = null };

            app.MapGet(classFileRoute.Route, () => classFileRoute.RouteMessage);
            app.MapGet(ContactPage.Route, () => ContactPage.RouteMessage);

            app.MapGet(homeRoute.Route, () => homeRoute.RouteMessage);

            app.MapControllers();


            app.UseCors(builder => builder.AllowAnyOrigin());


            app.Run();
        }
    }
}
