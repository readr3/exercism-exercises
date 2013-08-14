# Accumulate

Implement an instance method on Array called `accumulate` which lets you perform an operation on each element in the array and returns a new array with the result of the operation.

```ruby
numbers = [1, 2, 3, 4, 5]
squares = numbers.accumulate do |number|
  number * number
end
```

## Restrictions

You may only use Enumerable#each to implement this method. No other enumerable methods are allowed.


## Source

Conversation with James Edward Gray II [view source](https://twitter.com/jeg2)
