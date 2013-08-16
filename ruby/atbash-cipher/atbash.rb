class Atbash
  LETTERS = 'abcdefghijklmnopqrstuvwxyz'

  def self.encode(message)
    segment(translate(sanitize(message)))
  end

  private

  def self.sanitize(message)
    message = message.gsub(/\W/, '')
    message.downcase
  end

  def self.translate(s)
    s.tr(LETTERS, LETTERS.reverse)
  end

  def self.segment(s)
    s.scan(/.{1,5}/).join(' ')
  end
end