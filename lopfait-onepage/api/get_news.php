<?php
include '../../wp-load.php';

$news = get_posts(['category' => '55', 'posts_per_page' => 1]);
$return_news = [
    'title' => $news[0]->post_title,
    'date' => date('F j,Y', strtotime($news[0]->post_date)),
    'content' => strip_tags($news[0]->post_content),
    'link' => '/' . $news[0]->post_name
];
$thumbnail_id = get_post_thumbnail_id($news[0]->ID);
if ($thumbnail_id) {
    $thumbnail = get_post($thumbnail_id);
    if ($thumbnail) {
        $return_news['image'] = $thumbnail->guid;
    }
}

$media = get_posts(['category' => '56', 'posts_per_page' => 1]);
$return_media = [
    'title' => $media[0]->post_title,
    'date' => date('F j,Y', strtotime($media[0]->post_date)),
    'content' => strip_tags($media[0]->post_content),
    'link' => '/' . $media[0]->post_name
];
$thumbnail_id = get_post_thumbnail_id($media[0]->ID);
if ($thumbnail_id) {
    $thumbnail = get_post($thumbnail_id);
    if ($thumbnail) {
        $return_media['image'] = $thumbnail->guid;
    }
}

$return = ['news' => $return_news, 'media' => $return_media];

header('content-type:application/json');
echo json_encode($return);