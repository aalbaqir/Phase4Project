# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding"

Journal.destroy_all
Quote.destroy_all
User.destroy_all  



puts "Seeding Users"
20.times do
    username = Faker::Games::SuperMario.unique.character
    password = "password"
    picture = Faker::Avatar.image
    bio = Faker::Quote.yoda
    User.create!(username: username, password: password, picture: picture, bio: bio)
end



puts "Seeding Journals"

25.times do
entry = Faker::Quote.matz
user_id = User.all.sample.id
Journal.create(entry:entry, user_id:user_id)
end


# puts "Seeding Profiles"
# 10.times do
# user_id = User.all.sample.id
# picture = Faker::Avatar.image
# bio = Faker::Quote.yoda
# profiles = Profile.create(user_id:user_id,  picture:picture, bio:bio )
# end



puts "Seeding Quotes"
25.times do
text =Faker::Quotes::Shakespeare.romeo_and_juliet_quote
author = "Shakespeare"
Quote.create(text:text, author:author)
end

puts "Done Seeding"