Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :create, :show, :update, :destroy]

    resources :answers, only: [:index, :create, :show, :update, :destroy] do
      resources :comments, only: [:index, :create]
    end

    resources :comments, only: [:destroy]

    resources :topics, only: [:index, :create, :show]
  end
end
