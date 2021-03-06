# DBC Blog Post # 1
#### "Git Bloggin'"
#### September 18, 2014

We've touched on many concepts that were new to me in this first week of DBC Phase 0, and I'd like to take a little bit of time to explain some of them in a way that's accessible and hopefully easy to understand.

Below you'll find my attempt to do just that on the topic of version control and, relatedly, on how git and Github track changes and stores code.

Version Control. What is it?

Stated (hopefully) simply, version control is  is a process of file management that allows a user to make multiple edits on a file without fear of changing or destroying the original.  Each and every edit can be saved during this process, allowing a user to revisit any former iteration of the file.  It's perhaps most easy to think of it like a save point in a video game. A user has the option to save everything she did up to a point and revisit that specific point whenever she wants.

Why is Version Control beneficial?

Multiple save points are beneficial because a user never has to fear making changes. She won't have to worry that a change will destroy something she's spent hours creating because, provided that she's saved along the way, she'll be able to revisit any past verison of the file she wants. Within the coding context, this is super helpful.  Code can go through many iterations before the final version.  Using version control, a coder can make edits on a discrete part of the code and test to how that change works within the whole without fear that anything will be destroyed.

git and Version Control.  How git helps you Track Changes.

Within the git platform, version control is easy to implement. All git folders are tracked folders. What that means is that whenever a user makes a change to a file within a git-tracked folder, git detects it.  A user can check the status of a file's changes by entering "git status" (without the quotes) on the command line from within the appropriate directory. Git will return information about the file's status--from whether it's been modified or whether there's been no changes.

Once a file has been modified, a user can decide to save--or commit--those changes using the following series of commands:

git add [file]

git commit -m "[message about the changes made]"

git push orgin master

git add [file] tells git that the user is ready to commit the file--or save the changes made.

git commit -m "[message]" allows the user to enter a short message about the specific changes to the file.

Finally, "git push origin master" (again without quotes) "pushes" the changes to the file to the user's remote repository (we haven't covered the meaning of this within this blog post yet--but suffice it to say, a remote repository is like a folder hosted on a server outside the local computer)

If a user wants to see the entire history of a file's changes, she can enter "git log" (no quotes) on the command line.  This will return the commit number, the author's name, the date and time of the modification and the commit message.


GitHub.  What is it?

Github is an online platform that allows git users to upload and share files via the site's remote repositories. Not only can users of Github see all versions of any of the uploaded files uploaded to the repositories, but they can also actively make changes on other users' files and submit proposed changes for incorporation, or merging.

Why use GitHub to store your code?

GitHub has a large and active online community of coders, many of whom are committed to improving code through collaboration. GitHub's remote repositories encourage collaborative work; all members can access other users' public repositories and submit changes to existing files. There is a review process before any changes are incorporated--or merged, however, so there's no fear that one user's changes will overwrite another's. This can allow multiple individuals to work on the same files without destroying the original. In sum, GitHub is a great platform that's collaboration-friendly.
