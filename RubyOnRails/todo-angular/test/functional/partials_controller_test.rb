require 'test_helper'

class PartialsControllerTest < ActionController::TestCase
  test "should get todo" do
    get :todo
    assert_response :success
  end

  test "should get docs" do
    get :docs
    assert_response :success
  end

end
