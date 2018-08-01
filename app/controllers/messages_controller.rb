class MessagesController < ApplicationController
  def index
    @group = Group.find(1)
  end
end
