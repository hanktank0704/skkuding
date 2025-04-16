# apt-get update
# apt-get install ruby
# gem install bundler

# mkdir -p /usr/src/app
# scp Gemfile app.rb root@ubuntu:/usr/src/app

# bundle install

# bundle exec ruby app.rb

FROM  ubuntu:16.04
RUN apt-get update 

RUN apt install ruby-bundler
RUN gem install bundler 

COPY . /usr/src/app

WORKDIR /usr/src/app
RUN bundle install

Run bundle exec ruby app.rb

EXPOSE 4567
CMD bundle exec ruby app.rb -o 0.0.0.0
