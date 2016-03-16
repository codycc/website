class Contact < MailForm::Base
  attribute :name,  :validate => true,length: { maximum: 35 }
  attribute :email, :validate => /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  attribute :message, :validate => true,length: { maximum: 400 }
  attribute :nickname, :captcha => true

  def headers
  {
    :subject => "Contact Form",
    :to => "codycondon50@gmail.com",
    :from => %("#{name}" <#{email}>)
  }
  end
end
