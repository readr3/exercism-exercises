require 'minitest/autorun'
require_relative 'array'

class ArrayTest < MiniTest::Unit::TestCase

  def test_empty_accumulation
    assert_equal [], [].accumulate {|e| e * e}
  end

  def test_accumulate_squares
    result = [1, 2, 3].accumulate { |number|
      number * number
    }
    assert_equal [1, 4, 9], result
  end

  def test_accumulate_upcases
    result = %w(hello world).accumulate { |word|
      word.upcase
    }
    assert_equal ['HELLO', 'WORLD'], result
  end

  def test_accumulate_reversed_strings
    result = %w(the quick brown fox etc).accumulate { |word|
      word.reverse
    }
    assert_equal ["eht", "kciuq", "nworb", "xof", "cte"], result
  end

  def test_accumulate_recursively
    result = %w(a b c).accumulate { |char|
      %w(1 2 3).accumulate { |digit|
        "#{char}#{digit}"
      }
    }
    assert_equal [["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"]], result
  end

end
