class Api::QuestionsController < ApplicationController

  def index
  end

  def create
    @question = Question.new(question_params)
    @question.user_id = current_user

    if @question.save


    else
      render @question.errors.full_messages;
    end
  end

  private

  def question_params
    params.require(:question).permit(:body)
  end
end
