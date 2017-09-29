class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.all
  end
  
  def create
    @answer = Answer.new(answer_params)
    @answer.question = Question.find(answer_params[:question_id])
    @answer.user_id = current_user.id

    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.find(params[:id])
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer.user_id == current_user.id && @answer.update(question_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
    @answer = current_user.answers.find(params[:id])

    if @answer.destroy!
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :question_id, :user_id)
  end

end
