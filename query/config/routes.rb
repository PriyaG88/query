Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :create, :show, :update, :destroy]

    resources :answers, only: [:index, :create, :show, :update, :destroy]
    resources :comments, only: [:index, :create, :destroy]

    resources :topics, only: [:index, :create, :show]
  end
end
