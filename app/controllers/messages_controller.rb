class MessagesController < ApplicationController
  def index
    @group = Group.find(6)
  end
end
