# Welcome to HacktoberFest

<div align="center">
<img src="https://user-images.githubusercontent.com/52650290/192514718-be2d966f-6335-474a-8fbf-1704b87aefe6.jpg" alt="hacktoberfest"/>
</div>
  
Hacktoberfest is for everyone. It is a month-long celebration from October 1st - 31st sponsored by Digital Ocean and GitHub to get people involved in [Open Source](https://github.com/open-source). Create your very first pull request to any public repository on GitHub and contribute to the open source developer community.

If you haven't register yet so register now: https://hacktoberfest.com/

### How to Contribute to "Flashcard App"

**1.**  Fork [this](https://github.com/rezwan2525/flashcard-react) repository.

**2.**  Clone your forked copy of the project.

```bash
   git clone https://github.com/rezwan2525/flashcard-react.git
```

**3.** Navigate to the project directory.
```
   cd flashcard-react
```

**4.** Create a new branch:
```
   git checkout -b <branch-name>
```

**5.** Make changes in source code.

**6.** Stage your changes and commit

```
   git add .
   git commit -m "<your_commit_message>"
```

**7.** Push your local commits to the remote repo.

```
   git push origin <branch-name>
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) with issue number (ex: issue #4 )

**9.** If anyone contribute to this repository, then the changes will not reflect in your local repository. For that:

**10.** Setup a reference(remote) to the original repository to get all the changes from the remote.
```
   git remote add upstream  https://github.com/rezwan2525/flashcard-react
```

**11.** Check the remotes for this repository.
```
   git remote -v
```

**12.** Fetching from the remote repository will bring in its branches and their respective commits.
```
   git fetch upstream
```

**13.** Make sure that you're on your master branch.
```
   git checkout main
```

**14.** Now that we have fetched the upstream repository, we want to merge its changes into our local branch. This will bring that branch into sync with the upstream, without losing our local changes.
```
   git merge upstream/main
```
**15.** Make a pull request.<br>
**16.** Please star the repository.


### NOTE

* Make Sure you commit your changes in a new branch.
* Make Sure you Give proper name to your files describing the addition.
* Also Make Sure you comment your code whereever necessary.
