---
layout: post
title:  "A Little More Class"
date:   2014-10-19 15:40:41
categories:
---

Whaddup, Ruby Noobs? In this edition of my DBC technical blog, I am tasked with teaching you a bit about [classes](http://en.wikipedia.org/wiki/Class_(computer_programming)) and [data structures](http://en.wikipedia.org/wiki/Data_structure). Read on to treat yourself to some knowlege:


![](/img/blog/treat_yo_self.gif)


####Data Structures, Data's Best Friends:

At it's most basic, a data structure is a way to organize information in a computer. There's not just one data structure; oh no, there are [many](http://en.wikipedia.org/wiki/Graph_(abstract_data_type)) [different](http://en.wikipedia.org/wiki/Tree_(data_structure)) [kinds](http://en.wikipedia.org/wiki/Tree_(data_structure)) whose organization may be particularly suited for one kind of data retrieval or another, depending on the needs of your use case. A real world example that comes to mind that might help to conceptualize the idea of data strutures is a flow-chart--especially one that assists with binary decision-making. Take this example:

![](/img/blog/mercury_flowchart.jpg)
<sub>Flow chart brought to you courtesy of [blobsite.net](http://blobsite.net/tag/freddie-mercury/)</sub>

If you were tasked with organizing Freddie Mercury's desires in a format that's easy for a computer to interface with, you might do so by organizing them into a data structure called a hash, like so:

![](/img/blog/mercury_hash.png)


If you don't remember what a hash is, it's cool. Just check out [my previous blog post]() on the subject. "But, Dionne," you say "I just read your previous post, and there also seems to be an [array]() in that mess of code you posted.  What gives?"

Well, you're correct, dear reader. There first key in my `@freddie_mercury` hash has a value that's an array. As I explained in my [post](), an array is also a data structure. It's particularly useful in this hash because Freddie Mercury has a lot of wants. Organizing his wants into an additional data structure makes them easy to traverse and ultimately retrieve, as you'll see in a bit in my code example.



####So, Where do Classes Come in to All of This?



Well, classes are not completely *dissimilar* to data structures--both provide a framework for organizing information. Unlike data structures, though, classes do much more than simply store data.  Indeed, classes create [objects](https://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/39-ruby-s-object-model/lessons/127-object-identity-what-is-an-object) and define the [state]() and [behavoir]() of the objects they define.  Awesome, right?! Wait. You don't know what that means, exactly?  Okay well, take a look at the code I've included below and we'll try to walk through this together:

```ruby
     class FreddieMercury

        def initialize
         @freddie_Mercury = {
            "wants" => [
              "to break free",
              "to ride his bicycle",
              "it all now",
              "to make a supersonic man outta you"
            ],
            "doesnt_want" => "you to stop him now",
            "isnt_sure" => "live forever"
          }

          things = rand(0...@freddie_Mercury["wants"].length)
          @wants = @freddie_Mercury["wants"][things]
          @doesnt_want = @freddie_Mercury["doesnt_want"]
          @isnt_sure = @freddie_Mercury["isnt_sure"]

          puts "Does Freddie Mercury want #{@wants}? Y/N?"
          self.get_input
        end

        def get_input
          @answer = gets.chomp.upcase.to_s
          self.check
        end

        def check
          if @answer == "N"
            puts "The only thing Freddie Mercury doesn't want is for #{@doesnt_want}."
          elsif @answer == "Y"
            puts "Okay. You know what Freddie Mercury wants."
          else
            puts "Freddie Mercury isn't sure if he wants to #{@isnt_sure}."
            puts "I'm not sure what letters you entered. Y/N?"
            self.get_input
          end
        end
      end
```

Above, you can see my `FreddieMercury` class. Note that it contains the hash we created earlier to store the information from the Freddie Mercury flow chart. Now, take a look all that code up there that begins and ends with `def` and `end`. Those are called [method](http://en.wikipedia.org/wiki/Method_%28computer_programming%29)s. Simply put, methods tell a computer to actually **do** something--to perform some specfic action. When methods are written or **defined** inside of classes, like mine are here, they enable the class's objects to perform the actions they specify. If I'd made a different class, for example, a class called `LisaLeftEyeLopez` I wouldn't be able to use my `FreddieMercury` methods on `LisaLeftEyeLopez`'s objects (unless I invloved [inheritance](), but that's a subject for a different blog entry). In the case of my code, when an new `FreddieMercury` object is created, it contains all of the information in the `@freddie_mercury` hash.  Let's take a look at this in the console:


ADD SNAPSHOT FROM CONSOLE OF FREDDIE MERCURY OBJECT.

Using ruby's built-in instation method `.new` WE CREATE A NEW OBJECT THAT HAS THE HASH.

my `#get_input` method retrieves information from a user. My `#check` method evaluates the user's input and returns some bit of the data I've stored in the `@freddie_mercury` hash.

Look again at `FreddieMercury`. Do you also see the code that's prefaced by the `@` symbol? You might recognize how that code functions within the methods if you look closely. Those are variables, and that special `@` notation makes them available throughout the class; they're called instance variables and all the methods in the class can access them.

What about that `#initialize` business, that's at the very beginning of the class? Whelp, any time you create or **define** a class, you've gotta intialize it. Initialization makes the class (and all the things within the class) accessible to a programmer. The notation to bring about a new instance of a class is `Class.new`

Now, it's all fine and well to talk about how to make a class, what a class contains, and how to make a class accessible, but what **is** a class exactly? Well, check out some of the examples on [this](http://code.tutsplus.com/tutorials/ruby-for-newbies-working-with-classes--net-15938) great Ruby tutorial page. Compare those example that to the examples I've included above, and I think you'll have a good introduction into this programming concept.

P.S. Any idea what my `FreddieMercury` does? Run it in [IRB](http://en.wikipedia.org/wiki/Interactive_Ruby_Shell) to find out!