class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def create
    @question = Question.new(question_params)
    @question.user_id = current_user.id

    if @question.save
      render :show
    else
      render json: @question.errors.full_messages
    end
  end

  def show
    @question = current_user.questions.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])
    @question.user_id = current_user.id

    if @question.update_attributes(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 400
    end
  end

  def destroy
    @question = current_user.questions.find(params[:id])
    @question.destroy!

  end

  private

  def question_params
    params.require(:question).permit(:body)
  end
end
