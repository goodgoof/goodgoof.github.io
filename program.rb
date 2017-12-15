=beginputs "hello"
p "Halo"
def greeting # here we say def to define a method and putthe name of our method
	  p "hkello"#here's the code inside our method
	end # here we end or close our method
def greeting(name)
	p "hello " +""+ name
end 
greeting("tim")
def greeting
	puts "Please enter your name"
	name=gets.chomp
	puts "Hello "+""+name
end
greeting
p 2+2
==end