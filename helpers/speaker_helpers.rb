module SpeakerHelpers
  def find_speaker(twitter_handle)
    data.speakers.find do |speaker|
      speaker.twitter == twitter_handle
    end
  end

  def photo_path(speaker)
    ext = speaker.photo_ext || "jpg"
    filename = [speaker.first_name, speaker.last_name].map(&:downcase).join(" ")
    filename_with_ext = [filename, ext].join(".").tr(" ", "-")
    "/images/speakers/#{filename_with_ext}"
  end

  def twitter_url(speaker)
    "https://twitter.com/#{speaker.twitter || speaker.handle}"
  end

  def github_url(speaker)
    "https://github.com/#{speaker.github}"
  end

  def speaker_id(name)
    I18n.transliterate name.downcase.gsub(" ", "-")
  end
end
