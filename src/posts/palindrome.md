---
slug: "/blog/check-palindrome-for-numbers-algorithm-flowchart"
title: "Check Palindrome (for numbers) - Algorithm, flowchart, Pseudocode, Implementation
"
date: 2021-21-25T16:59:01+05:30
draft: false
description: "The article explain on finding the algorithm, flowchart, pseudocode and implementation of checking whether a given number is a palindrome in C and Python."
image: "/assets/palindrome/banner.png"
---

Given a number, write a algorithm, flowchart, pseudocode to check if it is palindrome or not. 

A string is said to be palindrome if reverse of the string is same as string. For example, `1221` is palindrome, but `1223` is not palindrome.

We will follow a method where we get each numbers using mathematical operations.


## Logic

1. Get the number to check and store it in `n`.

2. Create empty variables `r = 0`, `s = 0` and`t = n`. Here, `s` will become the reversed number, `t` will be a reference to original number, `r` will be a temporary variable.

3. Start a while loop checking whether the `n != 0`(if n is 0 exit the while loop). 

4. Inside the while loop do the following operations.

   ```python
   r = n % 10
   s = s * 10 + r
   n = n / 10
   ```

   First get the last digit of `n` by dividing the given number(`n`) by 10 and finding the remainder(the `%` operator) and store it in `r`. Then, add `r` to `s` after multiplying it by previous stored value of `s` by 10. And finally divide `n` by 10 and store it again in `n`. This way the number is reversed and stored in `s`.

5. After the loop ends, check whether `s == t`(whether the original number is same as reversed number).
6. If `s == t`, display that `n` palindrome, else display `n` is not a palindrome.

## Flowchart

WIP, have a look [here](https://mermaid-js.github.io/mermaid-live-editor/view/#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBKChTdGFydCkpIC0tPiBCWy9SZWFkIE51bWJlciB0byBjaGVjayBhcyBuL107XG4gICAgQiAtLT4gQ1tBc3NpZ24gcz0wLCB0ID0gbl07XG4gICAgQyAtLT4gRHsgV2hpbGUgbiE9MCB9OyBcbiAgICBEIC0tIFRydWUgLS0-IEVbXCJyID0gbiAlIDEwIDxicj5zID0gcyAqIDEwICsgcjxicj5uID0gbiAvIDEwXCJdIC0tPiBEXG4gICAgRCAtLSBGYWxzZSAtLT4gRntJcyBuID09IHQ_fVxuICAgIEYgLS0gWWVzIC0tPiBHWy9QcmludCBuIGlzIHBhbGluZHJvbWUvXSAtLT4gSVtTdG9wXTtcbiAgICBGIC0tIE5vIC0tPiBIWy9QcmludCBuIGlzIG5vdCBhIHBhbGluZHJvbWUvXSAtLT4gSSgoU3RvcCkpOyIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkYXJrXCJcbn0iLCJ1cGRhdGVFZGl0b3IiOnRydWUsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjp0cnVlfQ).

```js
graph TD
    A((Start)) --> B[/Read Number to check as n/];
    B --> C[Assign s=0, t = n];
    C --> D{ While n!=0 }; 
    D -- True --> E["r = n % 10 <br>s = s * 10 + r<br>n = n / 10"] --> D
    D -- False --> F{Is n == t?}
    F -- Yes --> G[/Print n is palindrome/] --> I[Stop];
    F -- No --> H[/Print n is not a palindrome/] --> I((Stop));
```

## Pseudocode

```pseudocode
BEGIN
READ number to check as n
SET s = 0
SET t = n
WHILE n != 0 DO
	r = n % 10
	s = s * 10 + r
	n = n / 10
ENDWHILE
IF n == t
	DISPLAY n is palindrome
ELSE
	DISPLAY n is not a palindrome
ENDIF
END
```

## Implementation

1. In C:

   ```c
   #include <stdio.h>
   
   /* Function to check if n is Palindrome*/
   int is_palindrome(int n)
   {
       int s = 0;
       int t = n;
       int r = 0;
       while (n != 0 )
       {
           r = n % 10;
           s = s * 10 + r;
           n = n / 10;
       }
       // Check if rev_n and n are same or not.
       if (s == t)
           return 1;
       else
           return 0;
   }
   
   int main()
   {
       int tocheck = 1221;
       int op = is_palindrome(to_check);
       if (op == 1)
           printf("%d is a palindrome", tocheck);
       else
           printf("%d is not a palindrome", tocheck);
       return 0;
   }
   ```

2. In Python:

   ```python
   def is_palindrome(n: int) -> bool:
       s = 0
       t = n
       r = 0
       while n != 0:
           r = n % 10
           s = s * 10 + r
           n = n / 10
       if t == s:
           return True
      	else:
           return False
   number = 1001
   palim = is_palindrom(number)
   if palim:
       print(f"{number} is a palindrom")
   else:
       print(f"{number} is not a palindrom")
   ```

   
