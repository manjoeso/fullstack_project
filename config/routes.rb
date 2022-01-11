Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :show, :edit] do 
      resources :workspaces, only: [:index]
    end
    resources :workspaces, only: [:index] do 
      resources :boards, only: [:index, :create, :show]
    end

    resources :boards, only: [:index] do
      resources :projects, only: [:create, :show]
    end
    # resources :workspaces, only: [:create, :index, :show, :edit, :destroy]
    # resources :users_workspaces, only: [:create, :destroy]
  end
  
 


  namespace :api, defaults: {format: :json} do 
      resource :session, only: [:create, :destroy]
  end

end
