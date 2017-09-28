class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where("answer_id = ?", params[:answer_id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.user_id == current_user.id && @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    if @comment.destroy!
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :answer_id)
  end
end
