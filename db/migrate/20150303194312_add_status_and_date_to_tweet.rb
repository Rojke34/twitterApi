class AddStatusAndDateToTweet < ActiveRecord::Migration
  def change
    add_column :tweets, :status, :boolean
    add_column :tweets, :date, :date
  end
end
