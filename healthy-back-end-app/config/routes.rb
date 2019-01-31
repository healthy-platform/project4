Rails.application.routes.draw do

  resources :menus do 
    resources :restaurants, shallow: true 
  end

  get "/restaurants", to: "restaurants#index"
  get "/menus", to: "menus#index"
  # get "/users", to: "users#show"

  # get 'restaurants/index'
  # get 'restaurants/show'
  # get 'restaurants/new'
  # get 'restaurants/edit'
  # get 'menus/index', to: "menus#index"
  # get 'menus/show'
  # post 'menus/new', to: "menus#new"
  # get 'menus/edit'
  # get "users" to: "users#index"
  # get "/users",  to: "users#index"
  get "/users/:id",  to: "users#show"
  post "/users",  to: "users#create"
  post "/login", to: "sessions#create"
  # get '/users/new' 
  # get '/users/edit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end