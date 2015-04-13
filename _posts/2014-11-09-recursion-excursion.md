---
layout: post
title:  "Recursion Excursion"
date:   2014-11-09 15:40:41
categories:
---

Hey boots! Let's learn about one of the most difficult topics I've yet encountered in my short career at DBC! Sound enticing? I bet it does. Read on to find out about the awesomness of recursion!

### A Simple Example of Recursion

At it's most basic, recursion is a process of [self-similar](http://en.wikipedia.org/wiki/Self-similarity) repetition.  In computer programming, this translates to  a loop that calls to itself to complete some task.

Take, for instance, the following example I've written in [IRB](http://en.wikipedia.org/wiki/Interactive_Ruby_Shell):

```def recursive(array)
if array.length == 1
return 1
else
array.pop
recursive(array)
end
end```

If you were to copy and paste the above code into an IRB console, the [method](http://en.wikipedia.org/wiki/Method_%28computer_programming%29) would execute, but you really wouldn't see what was going on under the hood.  This version would provide an example that's a little more demonstrative:

```def simple_recursive(array)
p "Hello, your array contains #{array.length} items."
p "Now calling your recursive method:"
if array.length == 1
p "You have reached the end, your array now  contains #{array.length} item."
p "This is the final object in your array:  #{array[0]}."
else
x = array.pop
p "Removed  item #{x}. Your array now contains #{array.length} items."
recursive(array)
end
end ```

If I pass that method this input: `[1,2,3,4,5]`, the following would print out to the console:

As you can see, the method checks to see if the length of the array is 1.  If not, the method will take one item off the array, and check it's length again.  The method continues those steps until the array's length is actually 1, at which point the method stops executing. Easy peasy! (Except not really because this is probably the most basic example of a recursive function that you can get.  Nevertheless, it demonstrates two fundamental aspects that recursive functions have:  A loop and a [break statement](http://en.wikipedia.org/wiki/Control_flow#Early_exit_from_loops).)

The break statement tells the method when to stop executing the loop.  The idea is that you want the loop to execute the same process over and over again until a specific condition is met:  that specific condition is that the  break statemen is true.

In my example, I wanted the looping to stop once my input array's length was exactly 1.  The method kept calling to itself to check the array's length, and "[pop](http://ruby-doc.org/core-2.2.0/Array.html#method-i-pop)"* an item off it, until the length met the break condition.

A super simple?  Yes. Hopefully, it was an approachable one, too.  A slightly less simple example (but still considered simple by some, nonetheless) of recursion is often demonstrated by calculating the factorial of a number.

###Calculating a Factorial Recursively

```def factorial(x)
if x == 1
return 1
else
x = x * factorial(x-1)
end
return x
end ```

Fundamentally, the above method works just like my super simple one.  There is a break statement whose truth will stop the loop (`if x == 1`), and the loop itself is repeatedly called until the break statement is true.  This time, the input is a number.  The number is multiplied by the factorial of the number minus one.  See? No?  Okay.  It works like this:

If I pass the number four to this method, the method will check to see whether `4 == 1`, since that's not true, the method will then try to calculate the factorial of 4 - 1, i.e. the method will call itself on the number three, executing `factorial(3)`.  It will then check to see whether `3 == 1`, since _that's_ not true either , it will call itself on 3 -1, i.e. `factorial(2)` and so on, until it gets to `factorial(1)`. When it reaches the break statement (`factorial(1)`), it will return the number 1 to the method.  This means it will _now_ start the multiplication.  When we told the method to return 1, we were saying let `factorial(1) == 1`.  In other words,   2 * factorial(1) is the same as saying  2 x 1. Thus, factorial(2) == 2 * 1.  Now, it logically follows that 3 * factorial(2) is the same as saying 3 * 2 * 1 and finally factorial(4) is 4 * factorial(3), which is  just 3 * factorial(2).

This is probably most easily demonstrated by taking a look into the good ol' console.  I took the method I used at the beginning of this example and added a few demonstrative lines of code so that you could actually see what's going on under the hood:

```def factorial(x)
  if x == 1
    return 1
  else
    x.times{print "*"}
    puts
    x = x * factorial(x-1)
    p "This is x now: #{x}"
  end
  return x
end```

Here's the output from the console:

My method now checks the value of x and when `x != 1`, it prints a number of asterisks to the console that corresponds to x's current value.  So, you first see a line of 4 asterisks, then 3 asterisks, then 2 asterisks.

Once `x == 1`, it then knows that factorial(2) == 2, demonstrated by the line `This is x now: 2`.  It then multiples 3 * factorial(2) and stores that value as x.  `This is x now: 6`.  Finally, it multiplies 4 * factorial(3) .  `This is x now: 24`


In a lot of instances, the same tasks could be performed via iteration, but in certain circumstances, recursive functions provide a more efficient way to solve algorithmic problems.  For very simple algorithms, though,  recursive functions can actually take longer to fully execute than there iterative counterparts.

* destructively changes the array.


> This blog post was written in [Markdown](http://en.wikipedia.org/wiki/Markdown) wih the assistance of [StackEdit](https://stackedit.io/), a super awesome online Markdown editor.