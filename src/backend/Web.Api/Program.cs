using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("UserList"));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/users", async (AppDbContext db) => await db.Users.ToListAsync());

app.MapPost("/users", async (AppDbContext db, User user) => {
    db.Users.Add(user);
    await db.SaveChangesAsync();
    return Results.Created($"/users/{user.Id}", user);
});
app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.Run();
