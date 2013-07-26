class Year
  attr_accessor :value

  def initialize(value)
    @value = value
  end

  def leap?
    divisible_by?(4) unless divisible_by?(100) && !divisible_by?(400)
  end

  private

  def divisible_by?(n)
    @value % n == 0
  end
end

# Extension

class Fixnum
  def leap_year?
    divisible_by?(4) unless divisible_by?(100) && !divisible_by?(400)
  end

  private

  def divisible_by?(n)
    self % n == 0
  end
end