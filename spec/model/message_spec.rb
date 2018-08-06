require 'rails_helper'

describe Message do
  describe '#create' do
    it "is valid with a body, image" do
      message = build(:message)
      expect(message).to be_valid
    end



  end
end
