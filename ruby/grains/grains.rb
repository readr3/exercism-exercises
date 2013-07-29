class Grains

  def total
    (1..64).reduce(0) { |total, n| total + square(n) }
  end

  def square(n)
    2 ** (n - 1)
  end
  
end