class Pet
end

class Pet
	attr_reader :color,:breed, :name
	attr_accessor :name

	def initialize(color,breed)
		@color=color
		@breed=breed
		@hungry=true
	end

	def feed(food)
		puts "Mmmm, "+ food +"!"
		@hungry=false
	end

	def hungry?
		if @hungry
			puts "I\m hungry!"
		else
			puts "I\m full!"
		end
		@hungry
	end

end

class Cat < Pet
	def speak
		puts "Meow!"
	end
end

kitty = Cat.new("grey","Persian")

puts "lets inspect our new Cat:"
puts kitty.inspect
puts "What class does our new Cat belong to"
puts kitty.class
puts "Is our new Cat an object"
puts kitty.is_a?(Object)
puts "What color is our Cat"
puts kitty.color
puts "Lets give our Cat a new name"
kitty.name="Betsy"
puts kitty.name
puts "Is your Cat hungry now?"
puts kitty.hungry?
puts "lets feed our Cat"
puts kitty.feed("Tuna")
puts "Our cat can make noise"
puts kitty.speak

class Dog < Pet
	def speak
		puts "Woof"
	end
end
puppy= Dog.new("black", "Staffordshire Terrier")
puts "Our Dog can make noise"
puts puppy.speak
puts "what breed is our Dog?"
puts puppy.breed
