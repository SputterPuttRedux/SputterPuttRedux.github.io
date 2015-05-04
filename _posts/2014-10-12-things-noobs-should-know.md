---
layout: post
title:  "Things Noobs Should Know"
date:   2014-10-12 15:40:41
categories:
---

Alright, noobs. It's time to put your coding caps on 'cuz were about to learn about some programming concepts. Read on to find this fellow noob's explanation of Arrays and Hashes.

#### Arrays and Hashes: What are they? Why are you telling me this?

At their most basic, arrays and hashes are things. That's right, I said things. To the more erudite among us, Hashes and Arrays can be formally described as [data structures](http://en.wikipedia.org/wiki/Data_structure), but I assume that if you're reading this blog entry, you're a noob like me and you may or may not have an idea of what a data structure is. So, let's just keep it simple. Arrays and Hashes are things--things that store other things. That clear it up? No? I didn't think so.

It might help to think of Arrays and Hashes like tupperware containers made of code. Like tupperware, Hashes and Arrays can contain items. Unlike tupperware, those items aren't leftovers no one wants. Ruby has specific names for items stored inside of data structures--which we'll get to in a bit.  For now, let's settle on the idea that Hashes and Arrays store information. Better? I thought so.

Hashes and Arrays can both can store the same type of information, whether strings like “hey you!” or integers like 9; they just differ in their rules of construction and they *way* they store that information. Arrays are more rigid--any object you store in an array is going to be indexed by an ordered integer list. What? Okay, simple. Just think of it like this: any information you put in an array will be assigned a number--just like a numbered list. Except this list begins with zero. Check out the below chart to see what I'm saying:

![](/img/blog/array_Chart.png)

I placed the the string “zero” in the first position of my array. Because of the way [arrays work](http://ruby-doc.org/core-2.2.0/Array.html#description), the string “zero” was assigned the number zero. Don't get it confused though, I could've placed any string in the array and it would've been assigned an integer regardless of what the string was. You can see that more clearly with the string `“peanut butter”` which has been assigned the integer 2, because `"peanut butter"` is the third object placed in my array. Remember arrays begin they're number assignment at 0.

Hashes let you store information based on an arbitrary assignment of a value. Does that sound too computery? Just look at the hash chart I made to elucidate what I mean:

![](/img/blog/hash_Chart.png)

In a hash you can place any information you want. Unlike arrays, hashes don't assign an integer to correspond to the information you've placed within it. Hashes understand what you put in them as key/value pairs. So in the chart above, all my keys are names of people. All my values are strings whose content can be associated with those people somehow. Don't be too weded to my above example.  Hashes are flexible enough to store many types of objects.  They don't just have to be strings like I used above.

#### This stuff sounds awesome. How can I make a Hash? How can I make an Array?

To make array in Ruby, here's the syntax.

>`array = [ ]`

or

>`array = Array.new( )`

The above code shows different notation that achieves the same thing: creating an empty array in Ruby. If you want to create an array with information (objects) already in it, you just have to place the information/objects in between the brackets like so:

![](/img/blog/mic_Check_Array.png)

With a little finagling we could get the above array to return the following to our console:

![](/img/blog/mic_Check_Console.png)

To make a hash, here's the syntax:

>`hash = {} or hash = Hash.new()`

Like the example with arrays above, that creates an empty hash. If you want to create a hash with information in it already, you can use the following syntax:

![](/img/blog/phife_Dawg_Hash.png)

Again, through the magic of Ruby, you could get the following to show up in the console:

![](/img/blog/phife_Dawg_Console.png)

#### So if they both store information, why do they both exist? Is one better than the other?

This is one I can't answer definitively.  I'd bet few people would be willing to come down in favor of one data structure over another. There are arguments to be made for both.  Hashes are more flexible than arrays; the information they contain isn't limited to a rigidly-indexed list. On the other side of things, arrays are sometimes thought of as "workhorses", ubiquitous in ruby, whose [time complexity](http://en.wikipedia.org/wiki/Time_complexity) makes them speedy and useful . Either way, they're both essential for developers to store and access information at will. Thus they're both essential concepts to understand in your journey to be a developer,noob!