using aspnet_blog_application.Controllers;
using aspnet_blog_application.Models;
using aspnet_blog_application.Models.ViewModels;
public class PostViewModel{
    public List<PostModel> PostList {get;set;}
    public PostModel Post {get;set;}
}