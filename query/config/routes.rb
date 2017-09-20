Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    # resources :questions, only: [:index, :create, :show, :update, :destroy]
    # resources :answers, only: [:index, :create, :show, :update, :destroy]
    # resources :comments, only: [:create, :update, :destroy]
    # resources :topics, only: [:create, :show]
  end
end
