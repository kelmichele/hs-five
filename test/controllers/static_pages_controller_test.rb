require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get static_pages_index_url
    assert_response :success
  end

  test "should get about" do
    get static_pages_about_url
    assert_response :success
  end

  test "should get clients" do
    get static_pages_clients_url
    assert_response :success
  end

  test "should get design" do
    get static_pages_design_url
    assert_response :success
  end

  test "should get ecommerce" do
    get static_pages_ecommerce_url
    assert_response :success
  end

  test "should get sem" do
    get static_pages_sem_url
    assert_response :success
  end

  test "should get team" do
    get static_pages_team_url
    assert_response :success
  end

end
