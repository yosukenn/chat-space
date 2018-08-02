class MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
  end

  def create
    Message.create(message_params)
  end

  private
  def message_params
    params.require(:message).permit(:body, :image)
  end
end
