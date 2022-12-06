using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using BlazorCustomElements;
using BlazorCustomElements.Components;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
#if DESIGN
builder.RootComponents.Add<BlazorCustomElements.Pages.Index>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
#endif
builder.RootComponents.RegisterCustomElement<Counter>("blazor-counter");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
