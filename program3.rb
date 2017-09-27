def choose
	puts "Do you like programming? Yes or No please."
	choice=gets.chomp
	if (choice.downcase=="yes")
		puts "That\'s Great"
	elsif (choice.downcase=="no")
		puts "That\'s too bad"
	else
		puts "That wasn\'t a yes or a no"
	end
end
choose

def choose
	puts "Do you like programming? yes, no or maybe please"
	choice=gets.chomp
	case choice.downcase
	when "yes"
		puts"That\'s great"
	when "no"
		puts "That\'s sad"
	when "maybe"
		puts "I am glad you are giving it a chance"
	else
		puts "I dont know what that means"
	end
end
choose
