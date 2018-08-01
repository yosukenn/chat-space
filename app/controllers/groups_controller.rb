class GroupsController < ApplicationController
  def new
    @group = Group.new
  end

  def create
    group = Group.create(group_params)
    Member.new
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    Group.update(group_params)
    Member.update
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end
end
