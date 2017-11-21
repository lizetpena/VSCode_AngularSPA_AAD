using Owin;

namespace TodoListService
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //test comment
            ConfigureAuth(app);
        }
    }
}
