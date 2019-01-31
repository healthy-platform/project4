class UsersController <ApplicationController
  befor_

class UsersControllerTest < ActionDispatch::IntegrationTest
  def index 
    get users_index_url
    assert_response :success
  end

  test "should get show" do
    get users_show_url
    assert_response :success
  end

  test "should get new" do
    get users_new_url
    assert_response :success
  end

  test "should get edit" do
    get users_edit_url
    assert_response :success
  end

end
