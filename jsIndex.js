const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert("Why is it that Trump or Democratic rallies garner more enthusiasm than church, and in the process polarize the church? Why is it that corporations like SpaceX or Apple receive similar reactions? The Western church is rapidly shrinking, led by an exodus of millennials, who often find more meaning, values, and community in their political party or their workplace than church. Moreover, our lives have become so fractured that we cannot ascertain any relationship between our work, family, church, the economy, politics, science, or technology. This book argues that the problem is in our allowance of the nation and corporations to be the main providers of justice, healthcare, education, and welfare--goods that the church used to provide. In the process, our lives became fractured as every facet of life was sundered from religious and moral values. But this book argues that, for Christians, the church is our primary political body, not the nation. This is a summons to church leaders, heads of various industries, and anyone who senses the urgency of the above crises to reimagine our very fabric of society so that Christ and his church may have their proper place once again.", 'secondary')
  })
}