---
layout: post
title:  "Bloc Proc Lamda"
date:   2014-10-26 15:40:41
categories:
---

Strap on your thinking caps, noobs! (or strap off your yawn caps as it were) because it's time for another edition of Dionne's DBC technical blog! This week's topic falls squarely in the center of that ever-elusive subject of [Object Orientated Programming](http://en.wikipedia.org/wiki/Object-oriented_programming)! Glance at the links--they're helpul! Specifically, this week I will be covering the topic of blocs, procs and lambdas. Read on for your own edification:

### Blocs

By now, if you've read any of my previous technical blog entries, you've probably encountered blocs or blocks many times. Blocks are [code blocks](http://rubylearning.com/satishtalim/ruby_blocks.html)--snippets of code that can be found between `{curly braces}` or **do** and **end** syntax. Easy enough, right? Take a look at these images:

![](/img/blog/W6_curly_block_sublime.png)

![](/img/blog/W6_block_do_end_sublime.png)

The above shots from my code editor show an iterative method, `#each`, being called with code blocks that are formed between `{curly braces}` and between the words **do** and **end**. The reason to show both kinds of blocks is to demonstrate one coding convention in Ruby: if your block is only going to take up one line of code, the convention is to use the `{curly braces}` otherwise, use **do** and **end** syntax.

Here's some other useful things to remember about code blocks:

*   If you're associating a block with a method, it must always appear to the right of the method
*   If you declare a variable for the first time within a code block, you will only be able to access it there.
*   A code block is not actually an object in Ruby. Thus, it's not a really useful form for repeating tasks

In combination with methods, code blocks are super useful for executing bits of code in singular situations. When we want to be able to access the functionality of a block multiple times, we turn to the other subjects of today's post: Procs and Lambdas

### Procs

Let's start this section of with an image, shall we?

![](/img/blog/W6_proc_sublime.png)

[Reactive IO](http://www.reactive.io/tips/2008/12/21/understanding-ruby-blocks-procs-and-lambdas/) has a sweet and succint explanation of Procs or **Procedures**, which is essentially the following:

> We may want to have many different blocks at our disposal and use them multiple times. As such, passing the same block again and again would require us to repeat ourself[sic]. However, as Ruby is fully object-oriented, this can be handled quite cleanly by saving reusable code as an object itself. This reusable code is called a Proc (short for procedure). The only difference between blocks and Procs is that a block is a Proc that cannot be saved, and as such, is a one time use solution.

In the above image, the Proc (and it's usefulness) can be seen beginning on line 16. Do you see how the new instance of the Proc class is assigned to a variable, `double_it`, and how that variable is used multiple times? This is awesome, right!? Procs provide a way to "objectify" blocks. They make it such that blocks can be accessed again and again. (Note to invoke your Proc, you must call the `#call` method)

### Lambdas

Last, but not least are Lambdas. On first glance, Lambdas look very similar to procs:

![](/img/blog/W6_lamda_sublime.png)

Indeed, in the above image, we're taking what looks like a regular old code block and we're assigning it to a variable. Further down, we reference the variable more than once. Similar to Procs so far, right? The most obvious difference between the two is the notation for how they're formed--with Procs requiring `Proc.new` and lamdas simply being declared and followed by the code block we wish to repeat.

But there's more to it than that! At the end of the day, the two are very similar, but they treat control flow differently. Certain keywords that are essential to flow such as `return` and `break` behave differently within each of these block-saving objects.  Helpful Ruby Blogger Alan Skorkin wrote a dream explanation for noobs on the differences between Procs and Lamdas. You can find it [here](http://www.skorks.com/2010/05/ruby-procs-and-lambdas-and-the-difference-between-them/#difference).


