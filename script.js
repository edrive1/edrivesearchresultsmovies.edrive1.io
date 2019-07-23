const result = ({ link = '', cite = '', desc = '', isAd = false }) => {
  const ad = isAd ? ` class="ad"` : '';
  return `<li${ad} style="display: none"><span class="link">${link}</span><cite>${cite}</cite><span class="desc">${desc}</span></li>`;
};

const results = [
{
  link: 'Netflix - Watch TV Shows Online, Watch Movies Online',
  cite: 'https://www.netflix.com/',
  desc: 'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
  isAd: true },

{
  link: 'Redbox: Rent Movies On Demand - DVDs, Blu-Ray™ & Games',
  cite: 'https://www.redbox.com/',
  desc: 'Get Social With Us. Connect with Redbox on Facebook to join the conversation. Join Redbox Text Club. Get members-only deals sent straight to your phone.',
  isAd: true },

{
  link: 'Blockbuster Video Stores & On Demand Movies',
  cite: 'www.blockbuster.com/',
  desc: 'The magic of Blockbuster Movies lives on. Find remaining store information or Make it a Blockbuster Night with DISH On Demand.',
  isAd: true },

{
  link: '10x10', 
  cite: 'https://drive.google.com/file/d/1YDkT0a90ONAsEsTlKEdSfz5UXO8v_GAN/view',
  desc: '1h 28min | NC-17 | Thriller | 13 April 2018' },

{
  link: '15:17 to Paris, The',
  cite: 'https://drive.google.com/file/d/1PiPC1EGhp71QvmopRZ0d-KAYea9cdAX3/view',
  desc: '1h 34min | PG-13 | Biography, Drama | 9 February 2018' },

{
  link: '2012',
  cite: 'https://drive.google.com/file/d/1TvsBRUsuQ3DP92JaVmSXCo48ytL6eB2W/view',
  desc: '2h 38min | PG-13 | Action, Adventure, Sci-Fi | 13 November 2009' },

{
  link: 'Adventures of Sharkboy and Lavagirl, The',
  cite: 'https://drive.google.com/file/d/1wkzCoiv9KazqK95RJyedpId_viAUuqRE/view',
  desc: '1h 33min | PG | Action, Adventure, Family | 10 June 2005' },

{
  link: 'Angus, Thongs, and Perfect Snogging',
  cite: 'https://drive.google.com/file/d/1K8kA6VS3FNfiCmlrbr0RNyuhLFpcRB5-/view',
  desc: '1h 40min | PG-13 | Comedy, Drama, Romance | 25 July 2008' },

{
  link: 'Annabelle',
  cite: 'https://drive.google.com/file/d/1nRf0sgs5rbUHdABZcj1ecdhR3eLAtjno/view',
  desc: '1h 39min | R | Horror, Mystery, Thriller | 3 October 2014' },

{
  link: 'Annabelle Creation',
  cite: 'https://drive.google.com/file/d/1XuMtgUNyPJ4U-odTrs13QNhFG9bUy3lg/view',
  desc: '1h 49min | R | Horror, Mystery, Thriller | 11 August 2017' }];



$('.input input').typed({
  strings: ["Movies"],
  typeSpeed: 0 });


setTimeout(function () {

  $.each(results, function (index, value) {
    $('.results-inner').append(
    result(this));

  });

  $('.pager-totals').fadeIn();
  $('.results li').fadeIn();

}, 1250);

setTimeout(function () {

  $('.results .ad').slideUp();

}, 3000);
