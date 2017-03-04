# Very Simple Todo App

For your first full stack project, you are going to extend your Very Simple Todo App (`07-VSTDA`) to store Todo items in a SQL database via a Web Service written using C# and ASP.NET.

<img src="http://i.imgur.com/vhMYF1s.png" />

## Tasks
1. Create a folder named `14-FullStackTodo` in your `dev` folder.
1. Setup your Git workflow.
  - Initialize an empty git repository in `14-FullStackTodo` by running `git init` in the command prompt.
  - Create a repository on GitHub called `14-FullStackTodo` and follow the instructions to add a remote origin.
1. Create a new Visual Studio solution in this folder called `VSTDA`.
1. Create an ASP.NET Web API 2 Project
1. Push up a master branch, and then create a feature branch.
1. Create and add properties to a class called `Todo.cs` in your `Models` folder.
1. Add a new `Data` folder in your API project.
1. Create and setup your Entity Framework DataContext class in a new `TodoDataContext.cs` stored in your `Data` folder.
1. Open Package Manager and run the migration commands shown in the video to initialize your SQL database via C#
1. Create a `TodoController.cs` file in your API project, following along with the video to create this controller.
1. At this point - your API is setup. Your challenge now is to integrate this API with your existing Angular application.

## Requirements
- Must be able to Create new Todo items (Which are ultimately stored in a database)
- Must be able to Read Todo items from the Database via the Web Service you created.
- Must be able to Update Todo items (Changes must be saved to the database)
- Must be able to Delete Todo items (Items must be deleted from the database)

## Extras
- Add some extra functionality to the application. Here are some ideas:
	- Allow users to mark todo items as completed.
 	- Create groups for users to categorize their todo items. This will involve adding a new `Group` table and setting up a relationship between `Group` and `Todo`. Read [this tutorial](http://www.entityframeworktutorial.net/code-first/configure-one-to-many-relationship-in-code-first.aspx) to see how that's done.

## Turn In Instructions
* Push your changes to GitHub on a feature branch and open a pull request into your master branch.
* [Click here to create an issue in the class repository](https://www.github.com/OriginCodeAcademy/Cohort9/issues/new?title=14-FullStackTodo&body=1.%20Where%20can%20I%20find%20your%20repository%3F%20(Paste%20the%20url%20of%20your%20repository%20below)%0A%0A2.%20What%20did%20you%20enjoy%20most%20about%20this%20project%3F%0A%0A3.%20What%20was%20the%20toughest%20part%3F%0A%0A)
    * Include a link to your repository in the description
    * Answer the questions filled out for you in the description
