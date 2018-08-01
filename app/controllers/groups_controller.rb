class GroupsController < ApplicationController
  def new
    @group = Group.new
    @users = User.all
  end

  def create
    group = Group.create(group_params)
    user_ids_params.each do |user_id|
      if user_id
        user_id = user_id.to_i
        Member.create(user_id: user_id, group_id: group.id)
      end
    end
    redirect_to root_path
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

  def user_ids_params
    params[:group][:user_ids]
  end
end
