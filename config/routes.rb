Rails.application.routes.draw do
  resources :groups do
    resources :messages, only: [:index]
  end
end
