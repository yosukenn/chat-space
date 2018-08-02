class MessagesController < ApplicationController
  def index
    @group = Group.find(1)
    @groups = current_user.groups
  end
end
