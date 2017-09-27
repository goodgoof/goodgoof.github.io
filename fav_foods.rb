def fav_foods
	food_array=[]
	food_array.each { |food| puts "I like #{food} too!" }
	
	3.times do # code goes in here
	puts "Name a favorite food"
	food_array<<gets.chomp
end
p food_array
puts "Your Favorite foods are #{food_array.join(", ")}"

food_array.each do |food| # do something to each element in food_array; that element is to be referred to as food
    puts "I like #{food} too!" # the thing we are doing
  end # ends the loop
  #alternatively can also write as food_array.each { |food| puts "I like #{food} too!" }
end
fav_foods



